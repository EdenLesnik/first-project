const TitleSection = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-full min-h-[50vh] bg-gradient-to-r from-red-600 to-blue-500 dark:from-green-700 dark:to-teal-600 text-white text-center p-10">
            <h1 className="text-5xl font-extrabold tracking-wide mb-4 animate-fade-in-down dark:text-green-300">
                    Cards Page
                </h1>
                <p className="text-2xl font-light mb-6 animate-fade-in-up">
                    Here you can find business cards from all categories
                </p>
                <div className="h-1 w-24 bg-white rounded-full mt-4 animate-grow"></div>
            </section>
        </>
    );
};

export default TitleSection;
