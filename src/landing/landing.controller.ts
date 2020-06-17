import { Get, Controller, Render } from '@nestjs/common';

@Controller('landing')
export class LandingController {

    @Get()
    @Render('landing/views/footer')
    root() {
      return { message: 'this message should dispaly before partial block layouts/base ', footer:"This message should display in footer" };
    }
}
