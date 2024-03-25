export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Macbook", preco: 5500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 13 },
    { id: 2, descricao: "Notebook Samsung", preco: 3500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 5 },
    { id: 3, descricao: "IMac", preco: 4200, descricaoPreco: "À vista no PIX",  imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 8 },
    { id: 4, descricao: "Teclado Apple", preco: 650, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 14 },
    { id: 5, descricao: "Teclado Pro", preco: 349, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 12 },
    { id: 6, descricao: "Mouse Gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Mouse USB", preco: 99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 6 },
    { id: 8, descricao: "Mouse Mini USB", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg",quantidadeEstoque: 3 },
    { id: 9, descricao: "Mouse c/ Fio", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 9 },
    { id: 10, descricao: "Fone FPS", preco: 599, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 4 },
    { id: 11, descricao: "Fone Bluetooth", preco: 199, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 11 },
    { id: 12, descricao: "Fone de ouvido ", preco: 250, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 15 },
    { id: 13, descricao: "HD 1TB", preco: 499, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 14 },
    { id: 15, descricao: "Combo Placas de Vídeo", preco: 12499, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 20 },
]