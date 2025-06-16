interface Network {
    name: string;
    url: string;
    icon: string;
}

export default function Redes({ name, url, icon }: Network) {
    return (
<section className="w-full mx-auto flex flex-col items-center">
    <a href={url} className="w-fit mx-auto text-center" target="_blank">
        <div className="rounded-full p-1 w-fit ">
            <img src={icon} alt="" className="md:w-[7rem] w-[3rem]"/>
        </div>
        <h3 className="text-center md:text-2xl 2xl:text-3xl text-black">{name}</h3>
    </a>
</section>
    )
}