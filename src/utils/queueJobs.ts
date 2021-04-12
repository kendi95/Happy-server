import Queue from 'bull';

import SendMail from '../jobs/SendMail';
import SendSMS from '../jobs/SendSMS';

// continuar com fila de tarefas de envio de email e de sms