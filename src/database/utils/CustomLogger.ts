import { Logger, QueryRunner } from 'typeorm';
import consola from 'consola';
import { getSeconds } from 'date-fns';

const { info, error: err, success, log, warn } = consola;

export class CustomLogger implements Logger {

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";
    info(`${requestUrl} executing query: ${query}`);
    return;
  }
  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";
    info(`${requestUrl} executing query: ${query}`);
    err(`${requestUrl} error: ${error}`)
    return;
  }
  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const duration = getSeconds(time);
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";
    info(`${requestUrl} executing query: ${query}, ${duration} secs`);
    return;
  }
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";
    success(`${requestUrl} ${message}`);
    return;
  }
  logMigration(message: string, queryRunner?: QueryRunner) {
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";
    success(`${requestUrl} ${message}`);
    return;
  }
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    const requestUrl = 
      queryRunner && queryRunner.data["request"] 
      ? "(" + queryRunner.data["request"].url + ")" : "";

    if (level === 'info') {
      info(`${requestUrl} ${message}`);
    }
    if (level === 'log') {
      log(`${requestUrl} ${message}`);
    }
    if (level === 'warn') {
      warn(`${requestUrl} ${message}`);
    }
    return;
  }
  
}