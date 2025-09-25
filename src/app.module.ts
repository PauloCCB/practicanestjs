import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloModule } from './hello/hello.module';


@Module({
  imports: [TaskModule, ProjectsModule, AuthModule,HelloModule], //* De esta manera se importa identifica un modulo principal
})
export class AppModule {}
