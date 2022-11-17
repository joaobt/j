interface Button {
    color?:'primary'| 'secondary' |'danger' | 'success'; 
  }

export function Button(props: Button)  {
    return <button>Enviar</button>
}
    
