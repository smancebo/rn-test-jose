import BaseService from '../services/base-service'
import { API_URL } from '../../helpers/constants';
import api from "../services/api";

export default class SourcesService extends BaseService {

    static getAllSources() {
        const url = `${API_URL}/sources`
        return api.get(url)
    }

    static getInfoFromsource(source: string) {
        const url = `${API_URL}/top-headlines?sources=${source}`
        return api.get(url)
    }

}