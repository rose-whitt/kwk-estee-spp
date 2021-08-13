/**
 * This file renders the product attributes
 *
 */
import React from 'react';
import Tabs from "./Tabs";

class ProductAttributes extends React.Component {
    render() {
        return (
            <div className="elc-product-attributes">
                <div>
                    
                    <Tabs className="tabs-container">
                        <div label="Formula Facts">
                            <h2 className="good-to-know-title">Good To Know</h2>
                            <div className="good-to-know-container">
                                <div className="good-to-know-text">Clean ingredients for a healthy, youthful glow.</div>
                                <div className="good-list">
                                    <div className="good-list-left">

                                        <div className="oil-free-container">
                                            <span className="oil-free-icon"></span>
                                            <span className="oil-free-text">Oil-free</span>
                                        </div>
                                        <br></br>
                                        <div className="pores-container">
                                            <span className="pores-icon"></span>
                                            <span className="pores-text">Non-acnegenic; won't clog pores</span>
                                        </div>
                                        <br></br>
                                        <div className="recycle-container">
                                            <span className="recycle-icon"></span>
                                            <span className="recycle-text">Recyclable glass bottle</span>
                                        </div>
                                        <br></br>
                                        <div className="synth-container">
                                            <span className="synth-icon"></span>
                                            <span className="synth-text">Free of synthetic fragrance</span>
                                        </div>
                                    </div>
                                    <div className="good-list-right">
                                        <div className="chem-container">
                                            
                                            <span className="chem-text">Free of parabens, phthalates, sulfites, sulfates and mineral oil</span>
                                            <span className="chem-icon"></span>
                                        </div>
                                        <br></br>
                                        <div className="derm-container">
                                            
                                            <span className="derm-text">Dermatologist-tested</span>
                                            <span className="derm-icon"></span>
                                        </div>
                                        <br></br>
                                        <div className="hydro-container">
                                            
                                            <span className="hydro-text">Face serum with Hyaluronic Acid and anti-oxidants</span>
                                            <span className="hydro-icon"></span>
                                        </div>
                                        <br></br>
                                        <div className="op-container">
                                            
                                            <span className="op-text">Ophthalmologist-tested</span>
                                            <span className="op-icon"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="ingredients-container">
                                <div className="ingredients-title">Full Ingredients List</div>
                                {/* <hr className="benefit-line"></hr> */}
                                {/* <div>hdskjfhlkwjadfhjklahsfd</div> */}
                                <div className="ingredients-text">Ingredients: Water\Aqua\Eau, Bifida Ferment Lysate, Peg-8, Propanediol, Bis-Peg-18 Methyl Ether Dimethyl Silane, Methyl Gluceth-20, Glycereth-26, Peg-75, Butylene Glycol, Adansonia Digitata Seed Extract, Tripeptide-32, Sodium Hyaluronate, Yeast Extract\Faex\Extrait De Levure, Lactobacillus Ferment, Cola Acuminata (Kola) Seed Extract, Anthemis Nobilis (Chamomile) Flower Extract, Hydrolyzed Algin, Pantethine, Caffeine, Lecithin, Sodium Rna, Bisabolol, Squalane, Glycerin, Oleth-3 Phosphate, Caprylyl Glycol, Oleth-3, Oleth-5, Choleth-24, Hydrogenated Lecithin, Jojoba Wax Peg-120 Esters, Ceteth-24, Tocopheryl Acetate, Carbomer, Triethanolamine, Tetrasodium Edta, Bht, Xanthan Gum, Potassium Sorbate, Disodium Edta, Phenoxyethanol, Red 4 (Ci 14700), Yellow 5 (Ci 19140)</div>
                            </div>
                            {/* <div className="ingredients-container">Ingredients: Water\Aqua\Eau, Bifida Ferment Lysate, Peg-8, Propanediol, Bis-Peg-18 Methyl Ether Dimethyl Silane, Methyl Gluceth-20, Glycereth-26, Peg-75, Butylene Glycol, Adansonia Digitata Seed Extract, Tripeptide-32, Sodium Hyaluronate, Yeast Extract\Faex\Extrait De Levure, Lactobacillus Ferment, Cola Acuminata (Kola) Seed Extract, Anthemis Nobilis (Chamomile) Flower Extract, Hydrolyzed Algin, Pantethine, Caffeine, Lecithin, Sodium Rna, Bisabolol, Squalane, Glycerin, Oleth-3 Phosphate, Caprylyl Glycol, Oleth-3, Oleth-5, Choleth-24, Hydrogenated Lecithin, Jojoba Wax Peg-120 Esters, Ceteth-24, Tocopheryl Acetate, Carbomer, Triethanolamine, Tetrasodium Edta, Bht, Xanthan Gum, Potassium Sorbate, Disodium Edta, Phenoxyethanol, Red 4 (Ci 14700), Yellow 5 (Ci 19140) <ILN47580></ILN47580></div> */}
                        </div>
                        <div label="Product Details">
                            <div className="repair-youth">
                                <div className="repair-youth-title">Fast Visible Repair and Youth-Generating Power</div>
                                <div className="repair-youth-text">
                                    Experience the next generation of our revolutionary formula—the most comprehensive Advanced Night Repair serum ever. Patented until 2033.
                                    <br></br>
                                    <br></br>
                                    Now with Chronolux™ Power Signal Technology, this deep- and fast-penetrating face serum reduces the look of multiple signs of aging caused by the environmental assaults of modern life. Skin looks smoother and less lined, younger, more radiant and even toned.
                                </div>
                            </div>
                            <hr className="benefit-line"></hr>
                            <div className="prod-det-left">
                                <div className="dropper">
                                    {/* <div className="dropper-image"></div> */}
                                    <div className="dropper-title">One Dropper</div>
                                    <div className="dropper-text">
                                        <ul>
                                            <li>Skin looks radiant and plumped with hydration—all the way through till morning.</li>
                                            <li>8-hour anti-oxidant power.</li>
                                            <li>72-hour hydration (includes Hyaluronic Acid).</li>
                                            <li>Strengthens skin barrier in just 4 hours.</li>
                                            <li>Oil-free texture.</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="benefit-line"></hr>
                                <div className="one-bottle">
                                    {/* <div className="one-bottle-image"></div> */}
                                    <div className="one-bottle-title">One Bottle</div>
                                    <div className="one-bottle-text">
                                        <ul>
                                            <li>Skin feels firmer. 89% of women agreed.</li>
                                            <li>Skin looks healthy, has a new bounce and vitality.</li>
                                        </ul>
                                        Plus, over time, pores look diminished.
                                    </div>
                                </div>
                                <hr className="benefit-line"></hr>
                                <div className="every-day">
                                    {/* <div className="every-day-image"></div> */}
                                    <div className="every-day-title">Every Day</div>
                                    <div className="every-day-text">
                                        During the day, this serum helps protect skin from environmental assaults­—a key part of skin’s own daily rhythm. Helps defend skin against the visible effects of free radical damage from environmental sources like pollution, ozone, blue light, infrared and micro dust. Provides 8-hour anti-oxidant protection to provide all-day defense against environmental assaults, and help keep skin looking younger, longer.
                                    </div>
                                </div>
                            </div>
                            <div className="prod-det-right">
                                <div className="num-one">
                                    {/* <div className="num-one-image"></div>
                                    <div className="num-one-text">The
                                    <br></br><span className="num-one-number"><em>#1</em></span>
                                    <br></br>Serum in the U.S.</div> */}
                                    <div className="num-one-title">The #1 Serum in the U.S.</div>
                                    <div className="num-one-text">
                                        Proven effective for all skintones. This is the high performance face serum beautiful skin can’t live without.
                                        <br></br>
                                        <br></br>
                                        Advanced Night Repair harnesses the restorative power of night to deliver visible renewal. It works night and day to help skin maximize its overall natural rhythm of repair and protection.
                                    </div>
                                </div>
                                <hr className="benefit-line"></hr>
                                <div className="three-weeks">
                                {/* <div className="three-weeks-image"></div> */}
                                <div className="three-weeks-title">Three Weeks</div>
                                    <div className="three-weeks-text">
                                        <ul>
                                            <li>Lines and wrinkles appear reduced.</li>
                                            <li>88% of women said skin looked more youthful.</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="benefit-line"></hr>
                                <div className="every-night">
                                    {/* <div className="every-night-image"></div> */}
                                    <div className="every-night-title">Every Night</div>
                                    <div className="every-night-text">
                                        While you sleep, it helps ignite skin’s natural nightly repair process. Fast. A high level of Hyaluronic Acid helps lock in moisture for 72 hours. This helps create the perfect environment to optimize skin’s natural repair process.
                                        <br></br>
                                        <br></br>
                                        Our exclusive Chronolux™ Power Signal Technology helps increase skin’s natural ability for visible self-repair, with in vitro testing showing it promotes skin’s natural renewal of vital new cells and boosts its natural production of collagen.
                                    </div>
                                </div>
                            </div>
                            {/* <hr className="benefit-line"></hr> */}
                            
                            {/* <hr className="benefit-line"></hr> */}
                            
                            {/* <hr className="benefit-line"></hr> */}
                            
                            {/* <hr className="benefit-line"></hr> */}
                            
                            {/* <hr className="benefit-line"></hr> */}
                            
                        </div>
                        <div label="Skin Types & Benefits" >
                            <h2 className="benefit"><em>The #1 serum in the U.S.* Fight the look of multiple signs of aging.</em></h2>
                            {/* <br></br> */}
                            <hr className="benefit-line"></hr>
                            <h2 className="skin-type-title">Skin Types</h2>
                            <div className="skin-types">
                                <div className="skin-type-text">A revolutionary serum for all skin types.</div>
                                <div className="skin-icon-container">
                                    <div className="normal">
                                        <div className="normal-icon"></div>
                                        {/* <br></br> */}
                                        <span className="nornal-text">Normal</span>
                                    </div>
                                    <div className="dry">
                                        <div className="dry-icon"></div>
                                        {/* <br></br> */}
                                        <span className="dry-text">Dry</span>
                                    </div>
                                    <div className="oily">
                                        <div className="oily-icon"></div>
                                        {/* <br></br> */}
                                        <span className="oily-text">Oily</span>
                                    </div>
                                    <div className="combo">
                                        <div className="combo-icon"></div>
                                        {/* <br></br> */}
                                        <span className="combo-text">Combination</span>
                                    </div>
                                    <div className="sensitive">
                                        <div className="sensitive-icon"></div>
                                        {/* <br></br> */}
                                        <span className="sensitive-text">Sensitive</span>
                                    </div>
                                    {/* <div className="sensitive-icon"></div> */}
                                </div>
                            </div>
                            {/* <br></br> */}
                            <hr className="benefit-line"></hr>
                            <h2 className="ideal-for-title">Ideal For</h2>
                            <div className="ideal-container">
                                <div className="age-skin-text">Radiant & Healthy Skin—No Matter Your Age.</div>
                                <div className="ideal-list">
                                    <div className="age">
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Multiple signs of aging</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Visible age prevention</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Loss of firmness, tone</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Lines and wrinkles</span>
                                        {/* <span className="age-icon"></span> */}
                                    </div>
                                    <div className="healthy">
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Dryness, dehydration—includes Hyaluronic Acid</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Dullness, loss of radiance</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Uneven skintone</span>
                                        <br></br>
                                        <div className="mobile-ideal-bullet">*</div>
                                        <span className="ideal-list-item">Anti-oxidants</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div label="How to Use">
                            
                            {/* <div className="am-icon"></div>
                            <div className="pm-icon"></div> */}
                            {/* <hr className="benefit-line"></hr> */}
                            <div className="how-to-text">
                                
                                Apply this face serum on clean skin before your moisturizer, AM and PM.
                                <br></br>
                                Use one dropper.
                                <br></br>
                                Smooth in gently all over face and throat.
                            </div>
                            <hr className="benefit-line"></hr>
                            <div className="how-to-steps">
                                <h2 className="heart-title-ritual">Try our Heart Ritual</h2>
                                <div className="step-one">
                                    <div className="step-icon">1</div>
                                    <div className="step-one-text">Apply a full dropper of Advanced Night Repair serum to the palm of your hand.</div>
                                </div>
                                <div className="step-two">
                                    <div className="step-icon">2</div>
                                    <div className="step-text">Massage onto face in a heart shape: Using all fingers of both hands, start at the center of your face and move out to ears. Glide hands from sides of face down under chin.</div>
                                </div>
                                <div className="step-three">
                                    <div className="step-icon">3</div>
                                    <div className="step-text">Next, trace a larger heart from middle forehead out to temples. Glide down the sides of the face and close the heart again under your chin.</div>
                                </div>
                                <div className="step-four">
                                    <div className="step-icon">4</div>
                                    <div className="step-one-text">Finish the Heart Ritual by gently massaging onto neck in a downward motion.</div>
                                </div>
                            </div>
                        </div>
                        <div label="The Routine">
                            <div className="the-routine-text1">Beautiful skin starts here. All you need are a few high-performance formulas targeted to your skin’s specific needs.</div>
                            <hr className="benefit-line"></hr>
                            <div className="routine-container">
                                
                                <a href="https://www.esteelauder.com/product/684/39476/product-catalog/skincare/cleanser-makeup-remover/advanced-night/micro-cleansing-balm?size=2.2_oz." className="cleanser">
                                    <div className="routine-titles">Cleanse</div>
                                    <div className="cleanser-image-container">
                                        <div className="cleanser-image">
                                            <div className="cleanser-overlay-text">Step 1</div>
                                        </div>
                                        
                                    </div>
                                    <div className="routine-product-title">Advanced Night</div>
                                    <br></br>
                                    <div className="routine-product-subtitle">Micro Cleansing Balm</div>
                                    <br></br>
                                    <div className="review-container">
                                        <div className="cleanser-review"></div>
                                        <div className="cleanser-price">$47.00</div>
                                    </div>
                                    
                                    
                                </a>
                                
                                
                                <a href="https://www.esteelauder.com/product/26389/29363/product-catalog/skincare/toner-treatment-lotion/micro-essence/skin-activating-treatment-lotion?size=5.0_oz." className="lotion">
                                    <div className="routine-titles">Prepare</div>
                                    <div className="lotion-image-container">
                                        <div className="lotion-image">
                                            <div className="lotion-overlay-text">Step 2</div>
                                        </div>
                                        
                                    </div>
                                    <div className="routine-product-title">Micro Essence</div>
                                    <br></br>
                                    <div className="routine-product-subtitle">Skin Activating Treatment Lotion</div>
                                    <br></br>
                                    <div className="review-container">
                                        <div className="lotion-review"></div>
                                        <div className="lotion-price">$110.00</div>
                                    </div>
                                </a>

                                
                                <div className="serum">
                                    <div className="routine-titles">Repair</div>
                                    <div className="serum-image-container">
                                        <div className="serum-image">
                                            <div className="serum-overlay-text">Step 3: Current Item</div>
                                        </div>
                                        
                                    </div>
                                    <div className="routine-product-title">Advanced Night Repair Serum</div>
                                    <br></br>
                                    <div className="routine-product-subtitle">Synchronized Multi-Recovery Complex</div>
                                    <div className="review-container">
                                        <div className="serum-review"></div>
                                        <div className="serum-price">$105.00</div>
                                    </div>
                                </div>

                                
                                <a href="https://www.esteelauder.com/product/681/13158/product-catalog/skincare/daywear-moisturizer/multi-protection-anti-oxidant-24h-moisture-creme-spf-15?size=1.7_oz._Dry" className="moisturizer">
                                    <div className="routine-titles">Moisturize</div>
                                    <div className="moisturizer-image-container">
                                        <div className="moisturizer-image">
                                            <div className="moisturizer-overlay-text">Step 4</div>
                                        </div>
                                        
                                    </div>
                                    <div className="routine-product-title">DayWear Moisturizer</div>
                                    <br></br>
                                    <div className="routine-product-subtitle">Multi-Protection Anti-Oxidant 24H-Moisture Creme SPF 15</div>
                                    <div className="review-container">
                                        <div className="moisturizer-review"></div>
                                        <div className="moisturizer-price">$55.00</div>
                                    </div>
                                </a>
                                
                                
                                <a href="https://www.esteelauder.com/product/685/55125/product-catalog/skincare/eye-care/advanced-night-repair-eye-supercharged-complex/synchronized-recovery?size=0.5_oz." className="eye">
                                    <div className="routine-titles">Eye Care</div>
                                    <div className="eye-image-container">
                                        <div className="eye-image">
                                            <div className="eye-overlay-text">Step 5</div>
                                        </div>
                                        
                                    </div>
                                    <div className="routine-product-title">Advanced Night Repair Eye Supercharged Complex</div>
                                    <br></br>
                                    <div className="routine-product-subtitle">Synchronized Recovery</div>
                                    <div className="review-container">
                                        <div className="eye-review"></div>
                                        <div className="eye-price">$66.00</div>
                                    </div>
                                </a>
                            </div>
                            <hr className="benefit-line"></hr>
                            <div className="want-it">Want It All?</div>
                            <div className="buy-routine">Buy The Estee Routine Now.</div>
                        </div>
                    </Tabs>
                </div>
            </div>
        );
    }
}
// const ProductAttributes = ({ attributes }) => {
 
//     return (
        
//         <div className="elc-product-attributes">
//             <div>
//                 <h1>Tabs Demo</h1>
//                 <Tabs>
//                     <div label="Gator">
//                         See ya later, <em>Alligator</em>
//                     </div>
//                     <div label="Croc">
//                         After 'while, <em>Crocodile</em>!
//                     </div>
//                     <div label="Sarcosuchus">
//                         Nothing to see here, this is <em>extinct</em>!
//                     </div>
//                 </Tabs>
//             </div>
            
//             {attributes.map(attribute => {
//                 return (
//                     <div className="product-attribute" key={attribute.label}>
//                         <Tabs>
//                             <div label={attribute.label}></div>
//                         </Tabs>
//                         <h3>{attribute.label}</h3>
//                         <p dangerouslySetInnerHTML={{ __html: attribute.content }}></p>
//                     </div>
//                 )
//             })}
//         </div>
//     );
    
 
 
// }
 
 // Export out the React Component
 export default ProductAttributes;