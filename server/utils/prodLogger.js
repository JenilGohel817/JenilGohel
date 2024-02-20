import { createLogger, transports, format } from "winston";

const { combine, timestamp, errors, json, printf } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${message} ${stack || ""}`;
});

const prodLogger = () => {
  return createLogger({
    level: "info",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      json(),
      myFormat
    ),
    defaultMeta: { service: "production" },
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
    ],
  });
};

export default prodLogger;
