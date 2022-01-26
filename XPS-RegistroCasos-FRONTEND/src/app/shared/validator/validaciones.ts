import { FormControl } from "@angular/forms";


  export const nombreApellidoPattern: string = '([a-zA-ZÀ-ÿ]+) ([a-zA-ZÀ-ÿ]+)';
  export const emailPattern         : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  export const noEsStrider=(control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }
    return null; 
 }