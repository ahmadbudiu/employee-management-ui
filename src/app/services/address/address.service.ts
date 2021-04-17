import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    constructor(private httpClient: HttpClient) { }

    async getAllProvinces(): Promise<any> {
        return await this.httpClient.get('indonesia/provinces').toPromise();
    }

    async getCitiesByProvince(provinceId: number): Promise<any> {
        return await this.httpClient.get('indonesia/provinces/' + provinceId + '/cities').toPromise();
    }

    async getDistrictsByCity(cityId: number): Promise<any> {
        return await this.httpClient.get('indonesia/cities/' + cityId + '/districts').toPromise();
    }

    async getVillagesByDistrict(districtId: number): Promise<any> {
        return await this.httpClient.get('indonesia/districts/' + districtId + '/villages').toPromise();
    }
}
