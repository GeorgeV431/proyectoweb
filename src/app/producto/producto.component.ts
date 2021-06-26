import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Usuario, Producto, Comentarios, Boleta, Detalle } from '../clases/clases';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto: Producto = { id: 1, nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni" };
  cantidad: number = 1;;

  comentarios: Array<Comentarios> = [
    { id: 1, producto: 101, usuario: 665, texto: "que wen producto 10/10" },
    { id: 2, producto: 101, usuario: 666, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis quis magna quis viverra. Integer lacus est, aliquet quis metus eget, pellentesque vehicula tellus. Nulla facilisi. Praesent vestibulum arcu enim, ac commodo nulla ultrices vel. In bibendum dui at tincidunt maximus. Nulla malesuada lacus volutpat purus egestas, nec rhoncus leo tincidunt. Proin sodales interdum lacus in fringilla. Donec convallis justo sit amet fermentum finibus. Duis placerat ante non lacus vestibulum iaculis. Sed efficitur sodales tempor. Sed porta vestibulum viverra." },
    { id: 3, producto: 101, usuario: 667, texto: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο όπως 'Εδώ θα μπει κείμενο, εδώ θα μπει κείμενο', κάνοντάς το να φαίνεται σαν κανονικό κείμενο. Πολλά λογισμικά πακέτα ηλεκτρονικής σελιδοποίησης και επεξεργαστές ιστότοπων πλέον χρησιμοποιούν το Lorem Ipsum σαν προκαθορισμένο δείγμα κειμένου, και η αναζήτησ για τις λέξεις 'lorem ipsum' στο διαδίκτυο θα αποκαλύψει πολλά web site που βρίσκονται στο στάδιο της δημιουργίας. Διάφορες εκδοχές έχουν προκύψει με το πέρασμα των χρόνων, άλλες φορές κατά λάθος, άλλες φορές σκόπιμα (με σκοπό το χιούμορ και άλλα συναφή)" }
  ]

  valoracion = 2;
  stars = ''.split('.');
  constructor(private cartService: CartService) {
    switch (this.valoracion) {
      case 1:
        this.stars = '1'.split('.');
        break;
      case 2:
        this.stars = '1.2'.split('.');
        break;
      case 3:
        this.stars = '1.2.3'.split('.');
        break;
      case 4:
        this.stars = '1.2.3.4'.split('.');
        break;
      case 5:
        this.stars = '1.2.3.4.5'.split('.');
        break;
      default:
        this.stars = ''.split('.');
        break;
    }

  }
  not0() {
    if (this.valoracion >= 1) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.producto = this.cartService.getObjeto();
  }

  addCart() {
    this.cartService.adicionarP(this.producto);
    this.cartService.adicionarC(this.cantidad);

  }

}
