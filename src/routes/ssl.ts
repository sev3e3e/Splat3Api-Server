import { Controller, Get } from 'routing-controllers';

@Controller()
export class SSLController {
    @Get('/.well-known/pki-validation/71C6E7F6356FB83979EAEEC90E7FF423.txt')
    validation() {
        return '4211A66485E02DAC2E0FBF45F8E3A2A5D65A5B8F26550B594994657E4E50AA4A\ncomodoca.com\n7935dce68568407';
    }
}
