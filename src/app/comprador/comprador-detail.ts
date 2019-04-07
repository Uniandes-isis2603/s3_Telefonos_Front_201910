

import { Comprador } from "./comprador";
import { Factura } from "../factura/factura";


export class CompradorDetail extends Comprador {
    /**
     * Facturas asociadas al comprador
     */
    facturas: Factura[];
}
