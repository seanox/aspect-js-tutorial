#import io/xml

Namespace.using("io");

/** Namespace io.material as interface for data access to the material data. */
io.material = {
    
    /**
     * Loads the data and simulates a REST interface.
     * @return XMLDocument
     */
    list() {
        return io.xml.fetch("data/materials.xml");
    }
}