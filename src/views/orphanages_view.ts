import Orphanages from "../models/Orphanages";
import imagesView from './images_view';

export default {
  render(orphanage: Orphanages) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      whatsapp: orphanage.whatsapp,
      telephone: orphanage.telephone,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      status: orphanage.status,
      images: imagesView.renderMany(orphanage.images)
    };
  },

  renderMany(orphanages: Orphanages[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
}