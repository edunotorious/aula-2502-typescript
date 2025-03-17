class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}
  detalhes(): string {
    return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}
const carro1 = new Carro("Volkswagen", "Polo", 2020);
console.log(carro1.detalhes());
