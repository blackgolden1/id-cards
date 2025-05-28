interface Network {
    name: string;
    url: string;
    icon: string;
}

export default function Redes({ name, url, icon }: Network) {
    return (
<section className="w-fit ">
    <a href={url} className="w-fit ">
        <div className="rounded-full p-1 w-fit ">
            <img src={icon} alt=""/>
        </div>
        <h3 className="w-fit">{name}</h3>
    </a>
</section>
    )
}