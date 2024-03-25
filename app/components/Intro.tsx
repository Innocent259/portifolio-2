const Intro: React.FC = () => {
    return (
        <div className="w-[50px] h-[50px] rounded-full border-[#ddd] border-2 overflow-hidden">
            <div
                className="w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: "url('/myImage.png')"
                }}
            />
        </div>
    )
}

export default Intro;