import express from "express";

const transactionRouter = express.Router();

transactionRouter.get("/", (_, res) => {
  res.json({
    error: `É necessário informar o parâmetro "period", cujo valor deve estar no formato aaaa-mm.`,
  });
});

export default transactionRouter;
