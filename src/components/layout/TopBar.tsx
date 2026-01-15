import React from "react"; 
const TopBar: React.FC = () => { 
    return ( 
    <div className="bg-[#0234B4] text-white text-sm"> 
    <div className="max-w-6xl mx-auto px-4"> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-2"> 
            {/* Columna izquierda: dirección + teléfono */} 
            <div className="flex flex-col md:flex-row items-center gap-3"> 
                {/* Dirección */} <div className="flex items-center gap-2"> 
                    {/* Icono pin */} <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" > 
                    <path d="M12 2C8.962 2 6.5 4.462 6.5 7.5C6.5 11.438 11.25 21 12 21C12.75 21 17.5 11.438 17.5 7.5C17.5 4.462 15.038 2 12 2ZM12 9.5C10.895 9.5 10 8.605 10 7.5C10 6.395 10.895 5.5 12 5.5C13.105 5.5 14 6.395 14 7.5C14 8.605 13.105 9.5 12 9.5Z" /> </svg> 
                    <span>Av. Lorem Ipsum 123</span> 
                    </div> 
                    </div> 
                    {/* Divider vertical y redes */} 
                    <div className="flex items-center gap-3"> 
                        {/* Teléfono */} 
                        <div className="flex items-center gap-2"> 
                            {/* Icono teléfono */} 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" > 
                            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.93C17.55 15.29 18.75 15.49 20 15.49C20.55 15.49 21 15.94 21 16.49V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.51C8.06 3 8.51 3.45 8.51 4C8.51 5.25 8.71 6.45 9.07 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" /> 
                            </svg> <span>444 8888</span> </div> {/* Barra blanca */} <span className="hidden md:inline-block h-6 w-px bg-white/70" /> 
                            {/* Redes sociales */} 
                            <div className="flex items-center gap-3"> 
                                {/* facebook */} 
                                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram" > 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
                                </svg>
                                </a> 
                                {/* instagram */} 
                                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook" > 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm4.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
                                </svg>
                                {/* Linkedin */} 
                                        </a> 
<a href="#" className="hover:text-gray-200 transition-colors" aria-label="Linkedin" > 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h4v1.7c.6-1 1.6-2 3.5-2 3.7 0 4.5 2.4 4.5 5.6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/>
                            </svg>
                            </a> 
                                        </div> 
                                        </div> 
                                        </div> 
                                        </div> 
                                        </div> 
                                        ); }; 
export default TopBar;