import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=8122109000&text=&type=phone_number&app_absent=0&wame_ctl=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPlpqNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacxUzLD7oqIAb0iHEbqg2rfSan4t-_yhm2oS4H51uUKn--GpbH9scxCbrFGwA_aem_XlIlxjsB1lYu_o_3xsy5IQ";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-2"
            aria-label="Chat on WhatsApp"
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
                Chat with us
            </span>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
        </a>
    );
};

export default WhatsAppWidget;
