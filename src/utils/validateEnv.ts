import { cleanEnv, str, num } from "envalid";

const getEnvVars = (): EnvObject => {
  const EnvVars = cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: num({ default: 5000 }),
    REDIS_PORT: num({ default: 6379 }),
    REDIS_HOST: str({ default: "localhost" }),
    JWT_SECRET: str(),
  });

  return EnvVars as EnvObject;
};

export const EnvVars = getEnvVars();
