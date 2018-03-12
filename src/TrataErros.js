import PubSub from 'pubsub-js';

export default class TrataErros{
    publicaErros(erros){
        console.log(erros.errors.lenght);
        for(var i=0; i<erros.errors.lenght; i++){
            console.log("2");
            var erro = erros.errors[i];
            console.log(erro); 
            //PubSub.publish("erro-validacao", erro);
        }
    }
}