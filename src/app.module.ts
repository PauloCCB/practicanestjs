import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule], //* De esta manera se importa identifica un modulo principal
})
export class AppModule {}
