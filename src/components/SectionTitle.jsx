

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12">
            <p className="text-amber-300">{subHeading}</p>
            <h2 className="uppercase text-info text-3xl border-y-2 border-success py-4 my-8">{heading}</h2>
        </div>
    );
};

export default SectionTitle;