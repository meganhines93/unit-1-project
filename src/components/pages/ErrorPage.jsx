
const ErrorPage = ({ children }) => {
    return(
        <main className="main-content">
            <h1>ERROR</h1>
            <div>{children}</div>
        </main>
    );
};

export default ErrorPage;