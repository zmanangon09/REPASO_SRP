interface User {
    id: number;
    name: string;
}

// Esta clase viola el Principio de Responsabilidad Única (SRP)
class UserBloc {
    private mailer: Mailer;
    private userService: UserService;

    constructor( mailer: Mailer, userService: UserService ) {
        this.mailer = mailer;
        this.userService = userService;
    }
    
    notifyUser() {
        this.mailer.sendEmail('zamanangon@espe.edu.ec', 'notification-template');
        // Simula el envío de notificaciones
    }
    loadUser( id: number ) {
        // Simula la carga de un usuario
        this.userService.loadUser(id);
    }
    saveUser( user: User ) {
        // Simula el guardado en base de datos
        this.userService.saveUser(user);
    }



}
class SubscriptionBloc {
    onAddSubscription( subscriptionId: number ) {
        console.log('Agregando suscripción:', subscriptionId );
    }

}

class UserService {
    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }

}

class Mailer {
    sendEmail( email: string, template: string ) {
        console.log('Enviando correo a:', email, 'con template:', template);
    }
}

const subscriptionBloc = new SubscriptionBloc();
const userService = new UserService();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
subscriptionBloc.onAddSubscription(1234);
