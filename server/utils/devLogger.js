import { createLogger, transports, format } from "winston";

const { combine, timestamp, errors, prettyPrint, printf } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${message} ${stack || ""}`;
});

const devLogger = () => {
  return createLogger({
    level: "info",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      prettyPrint(),
      myFormat
    ),
    defaultMeta: { service: "production" },
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
    ],
  });
};

export default devLogger;
