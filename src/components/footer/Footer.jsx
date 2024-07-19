
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-info-for-API">
                <span className="label">
                    Thank you for the free API:
                </span>
                <span className="info-for-API">
                    <a href="https://open-meteo.com/">Open-Meteo</a>
                </span>
                <span className="info-for-API">
                    <a href="https://openweathermap.org/">OpenWeather</a>
                </span>

            </div>
            <span className="info-for-author">
                created by <a href="https://github.com/blednyikaklanaya">Blednyikaklanaya</a>
            </span>
        </footer>
    )
}