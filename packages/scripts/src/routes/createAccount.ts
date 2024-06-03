import express, { Request, Response } from "express";
import {createAccount} from "../contracts/createAccount";
const router = express.Router();

interface Req {
  wallet_salt: number[]
}

type Res = string | {
    userAddr: string
}

router.post("/create-account", async (req: Request<never, never, Req>, res: Response<Res>) => {
  let { wallet_salt } = req.body;
  if (wallet_salt.length !== 32) {
    res.send(`Invalid wallet salt`);
    return;
  }
  let signer = await createAccount(wallet_salt);
  let [{address: userAddr}] = await signer.getAccounts()
  res.send({
    userAddr
  })
})

export default router;