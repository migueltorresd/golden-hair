export default function About() {
  return (
    <section className="seccion historia" id="nosotras">
      <div className="contenedor">
        <div className="retrato">
          <div className="aro" aria-hidden="true" />
          <img src="/retrato.jpeg" alt="Equipo Golden Hair" />
        </div>

        <div className="cuerpo-texto">
          <p className="eyebrow">Quiénes somos</p>
          <p className="entrada">
            Golden Hair es un emprendimiento creado por estudiantes con la idea de brindar una opción
            sencilla, accesible y efectiva para el cuidado del cabello.
          </p>
          <p>
            Nuestro producto principal es una mascarilla capilar diseñada para hidratar, reparar y
            ayudar a controlar el frizz, dejando el cabello más suave, manejable y con un aspecto saludable.
          </p>
          <p>
            Nacimos de la necesidad de encontrar un producto que cuide el cabello sin complicar demasiado
            la rutina. Por eso trabajamos con ingredientes seleccionados y ponemos dedicación en cada parte
            del proceso, buscando que nuestro producto sea útil y agradable para quienes lo utilizan.
          </p>
          <div className="firmas">
            <div><strong>Creado por estudiantes</strong>Un proyecto que nació de una necesidad propia.</div>
            <div><strong>Un solo paso</strong>Quince minutos a la semana, nada más.</div>
            <div><strong>Ingredientes seleccionados</strong>Sin sulfatos ni parabenos.</div>
            <div><strong>Hecho en Colombia</strong>Cuidamos cada parte del proceso.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
