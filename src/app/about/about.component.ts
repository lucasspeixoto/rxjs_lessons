import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fromEvent, interval } from "rxjs";
import { timer } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //! ----------------------------- Stream de Dados ----------------------------- !//
    /* //* EventListener - Emite valores a cada click do mouse (multi-value)
    document.addEventListener("click", (event) => {
      console.log(event);
    });

    //* Interval - Emite valores a cada 1s (multi-value)
    let counter = 0;
    setInterval(() => {
      console.log(counter);
      counter++;
    }, 1000);

    //* Timeout - Emite um único valor depois de 2s (single-value)
    setTimeout(() => {
      console.log("valor emitido");
    }, 2000); */

    //! ----------------------------- Rxjs ----------------------------- !//
    // * Stream simples (Sem Rxjs)
    /* let counter = 0;
    setInterval(() => {
      console.log(counter);
      counter++;
    }, 1000); */

    //* Strem simples (Com Rxjs)
    /* const interval$ = interval(1000);
    const timer$ = timer(3000, 1000);
     interval$.subscribe(value => {
      console.log(value)
    })
    timer$.subscribe((value) => {
      console.log(value);
    }); */

   /*  const click$ = fromEvent(document, 'click');
    click$.subscribe((event) => {
      console.log(event)
    }) */

    //! ----------------------------- Conceitos Rxjs ----------------------------- !//
    const timer$ = timer(1000, 1000);
    const subscription = timer$.subscribe({
      next: (event) => {
        console.log(event)
      },
      error: (error) => {},
      complete: () => {
        console.log('Completed')
      }
    })

    setTimeout(() => {
      subscription.unsubscribe()
    }, 5000)



  }
}
