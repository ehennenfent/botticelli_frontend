export function makeName(entity){
    if (entity.nickname){
        return entity.given_name + " \"" + entity.nickname + "\" " + entity.surname;
    }
    return entity.given_name + " " + entity.surname;
}
