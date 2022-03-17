// {item, preco} ou props
function Box({item, preco}){
    return (
        <>
            <li>{item || "Não passou o item"}</li>
        </>
    );
}

// Opção 2
// const Box = ({ item, preco }) => <li>{item || "Não passou o item"}</li>

const itens = ["Guarda-roupa", "Cama", "Colchão"];

const container = 
<ul>
    {
        itens.map((item, index) => <Box key={index.toString()} item={item} /> )
    }
</ul>