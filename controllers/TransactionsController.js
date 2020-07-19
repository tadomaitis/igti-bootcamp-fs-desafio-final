import {} from "../models/TransactionModel.js";

const rootRoute = (_, res) => {
  res.json({
    error: `É necessário informar o parâmetro "period", cujo valor deve estar no formato aaaa-mm.`,
  });
};

export default { rootRoute };
