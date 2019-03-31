import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.css"]
})
export class HijoComponent implements OnInit {
  @Output() salida = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.salida.emit("mandando valor desde el hijo");
  }
}
