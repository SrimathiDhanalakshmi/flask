import Header from "../components/Header"

const brands = [
          "Lenses....Zeiss",
          "Essilor",
          "Rodenstock",
          "Vision Rx",
          "Nova",
          "Kodak",
          "Vogue",
          "Tom Ford",
          "Ray-Ban",
          "Carrera",
          "Police",
          "Boss",
          "Mont Blanc",
        ];
        
export default function Products(){
          return(
                    <>
                    <Header />
                    <div className="scroll-container text-white">
                              <div className="scroll-content">
                                        {/* First set of brand names */}
                                        {brands.map((brand, index) => (
                                        <div
                                        key={`brand-1-${index}`}
                                        className="scroll-item text-center text-lg font-semibold p-2"
                                        >
                                        {brand}
                                        </div>
                                        ))}
                                        {/* Duplicate set of brand names for seamless scrolling */}
                                        {brands.map((brand, index) => (
                                        <div
                                        key={`brand-2-${index}`}
                                        className="scroll-item text-center text-lg font-semibold p-2"
                                        >
                                        {brand}
                                        </div>
                                        ))}
                              </div>
                              </div>
                                                  </>
          )
}