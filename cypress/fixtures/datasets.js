export default class datasets {

    static new_customer() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/,/g, '').replace(/ /g, '');
        
        return {
            name: 'Atlas Test',
            first_name: 'Atlas',
            last_name: 'Test',
            date_of_birth: '1998-04-24',
            address: 'Metro Manila',
            post_code: '1400',
            city: 'Caloocan',
            state: 'NCR',
            country: 'Philippines (the)',
            country_code: 'PH',
            phone: '09761517965',
            email: 'atlas_test'+`${formattedDateTime}`+'@gmail.com',
            password: 'P@ssw0rd_Atlas',
        };
    }

}
