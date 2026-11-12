// Mapas do Silent Hill Memories (imagens hospedadas lá; o app só as exibe com crédito e link).
export const MAP_BASE = 'https://www.silenthillmemories.net/sh2_remake/maps/pics/';
export const MAP_PAGE = 'https://www.silenthillmemories.net/sh2_remake/maps_en.htm';

const m = (label, file, spoiler = false) => ({ label, file: file + '.jpg', spoiler });
const floors = (prefix, list, spoiler) => list.map(([label, suf]) => m(label, `${prefix}${suf}`, spoiler));

const FL = [['1F', '_1f'], ['2F', '_2f'], ['3F', '_3f']];
const LAKE = [['Jardim', '_garden'], ['Subsolo', '_basement'], ['1F', '_1f'], ['2F', '_2f'], ['3F', '_3f'], ['Employee subsolo', '_employee_basement'], ['Employee 1F', '_employee_1f']];

export const AREAS = [
  { id: 'south-vale', name: 'South Vale (leste e oeste)', maps: [
    m('Geral', 'sh2r_map_01_south_vale'), m('Leste', 'sh2r_map_01_south_vale_east'), m('Oeste', 'sh2r_map_01_south_vale_west'),
    m('Leste completo', 'sh2r_map_complete_01_south_vale', true), m('Leste completo (2)', 'sh2r_map_complete_01_south_vale_east', true),
    m('Oeste completo', 'sh2r_map_complete_04_south_vale_west', true), m('Oeste revisitado', 'sh2r_map_complete_08_south_vale_west', true)] },
  { id: 'wood-side', name: 'Wood Side Apartments', maps: [
    ...floors('sh2r_map_02_wood_side_apartments', FL, false), ...floors('sh2r_map_complete_02_wood_side_apartments', FL.map(([l, s]) => [l + ' completo', s]), true)] },
  { id: 'blue-creek', name: 'Blue Creek Apartments', maps: [
    ...floors('sh2r_map_03_blue_creek_apartments', FL, false), ...floors('sh2r_map_complete_03_blue_creek_apartments', FL.map(([l, s]) => [l + ' completo', s]), true)] },
  { id: 'brookhaven', name: 'Brookhaven Hospital', maps: [
    ...floors('sh2r_map_05_brookhaven_hospital', FL, false),
    ...floors('sh2r_map_complete_05_brookhaven_hospital', [['Subsolo completo', '_basement'], ['1F completo', '_1f'], ['2F completo', '_2f'], ['3F completo', '_3f']], true)] },
  { id: 'otherworld-hospital', name: 'Hospital do Outro Mundo', maps: floors('sh2r_map_complete_06_otherworld_hospital', [['Subsolo', '_basement'], ['1F', '_1f'], ['2F', '_2f'], ['3F', '_3f']], true) },
  { id: 'otherworld-sv', name: 'South Vale do Outro Mundo', maps: floors('sh2r_map_complete_07_otherworld_south_vale', [['Oeste', '_west'], ['Leste', '_east']], true) },
  { id: 'toluca', name: 'Toluca Prison', maps: [
    ...floors('sh2r_map_09_toluca_prison', [['1F Main Section', '_1f_main_section'], ['1F Death Row', '_1f_death_row'], ['1F Administrative', '_1f_administrative_section'], ['2F', '_2f'], ['3F', '_3f'], ['Subsolo', '_basement']], false),
    ...floors('sh2r_map_complete_09_toluca_prison', [['1F Main completo', '_1f_main_section'], ['1F Death Row completo', '_1f_death_row'], ['2F completo', '_2f'], ['1F Administrative completo', '_1f_administrative_section'], ['3F completo', '_3f'], ['Subsolo completo', '_basement']], true)] },
  { id: 'labyrinth', name: 'Labirinto', maps: [
    m('Centro', 'sh2r_map_complete_10a_labyrinth_center', true), m('Rotten Area', 'sh2r_map_complete_10b_labyrinth_rotten_area', true),
    m('Desolate Area', 'sh2r_map_complete_10c_labyrinth_desolate_area', true), m('Flooded Level', 'sh2r_map_complete_10d_labyrinth_flooded_level', true),
    m('Ruined Area', 'sh2r_map_complete_10e_labyrinth_ruined_area', true)] },
  { id: 'lakeview', name: 'Lakeview Hotel', maps: [
    ...floors('sh2r_map_11_lakeview_hotel', LAKE, false), ...floors('sh2r_map_complete_11_lakeview_hotel', LAKE.map(([l, s]) => [l + ' completo', s]), true)] },
  { id: 'ruined-hotel', name: 'Hotel do Outro Mundo (Ruined Hotel)', maps: floors('sh2r_map_complete_12_otherworld_hotel', [['Employee subsolo', '_employee_basement'], ['Subsolo', '_basement'], ['Employee 1F', '_employee_1f'], ['2F', '_2f'], ['3F', '_3f']], true) }
];

export const mapUrl = (file) => MAP_BASE + file;
export const findArea = (id) => AREAS.find((a) => a.id === id);
