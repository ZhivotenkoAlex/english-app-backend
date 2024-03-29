import { Module } from '@nestjs/common'

import { ArticlesModule } from './articles/articles.module'
import { ConfigAppModule } from './config/config.module'
import { DatabaseModule } from './database/database.module'
import { GrammarModule } from './grammar/grammar.module'
import { GraphQlModule } from './graphql/graphql.module'
import { RulesModule } from './rules/rules.module'
import { ArticlesTranslateModule } from './articles-translate/articles-translate.module'
import { LessonsModule } from './lessons/lessons.module'

@Module({
  imports: [
    ConfigAppModule,
    GraphQlModule,
    DatabaseModule,
    ArticlesModule,
    GrammarModule,
    RulesModule,
    LessonsModule,
    ArticlesTranslateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
