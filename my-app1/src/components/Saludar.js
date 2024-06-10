export function Saludar() {
    const titulo = "Nueva información desde un componente externo";
    return (
        <section>
            <h2>{titulo}</h2>
            <p>Esta es la información de la noticia</p>
        </section>
    );
}