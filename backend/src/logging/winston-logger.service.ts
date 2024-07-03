import { Injectable, LoggerService } from "@nestjs/common";
import * as winston from "winston";
import "winston-daily-rotate-file";
import * as winstonLoggly from "winston-loggly-bulk";
import { config } from "dotenv";
config();
@Injectable()
export class WinstonLoggerService implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          filename: "logs/application-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d",
        }),
        new winstonLoggly.Loggly({
          token: process.env.LOGGLY_TOKEN,
          subdomain: process.env.LOGGLY_SUBDOMAIN,
          tags: ["Allu-Winston-NodeJS"],
          json: true,
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    if (trace) {
      this.logger.error(message, { trace });
    } else {
      this.logger.error(message);
    }
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
