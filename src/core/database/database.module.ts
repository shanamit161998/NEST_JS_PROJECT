import { Module } from '@nestjs/common';
import { databaseProviders } from './databases/database.providers';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {

}
