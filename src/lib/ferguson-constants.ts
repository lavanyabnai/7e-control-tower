// 7-Eleven Inc - Supply Chain Control Tower Data Constants
// Centralized reference for product names, facilities, customers, and suppliers

export const SEVEN_ELEVEN_PRODUCTS = {
  // Beverages
  COPPER_COUPLING: { name: "Big Bite Hot Dog", sku: "7EL-BB-1001", category: "Beverages", price: 245.00 },
  PEX_TUBING: { name: "Slurpee Frozen Drink 32oz", sku: "7EL-SL-3200", category: "Beverages", price: 89.50 },
  PVC_DWV_FITTING: { name: "7-Select Ground Coffee 12oz", sku: "7EL-CF-1200", category: "Beverages", price: 12.75 },
  DUCTILE_IRON_PIPE: { name: "Red Bull Energy Drink 12oz", sku: "7EL-EB-1200", category: "Distribution", price: 385.00 },
  COPPER_PIPE_TYPE_L: { name: "Coca-Cola 20oz Bottle", sku: "7EL-BV-2000", category: "Beverages", price: 42.30 },
  PVC_SCHEDULE_40: { name: "Lay's Classic Chips 8oz", sku: "7EL-SN-8000", category: "Beverages", price: 18.95 },
  BRASS_BALL_VALVE: { name: "Snickers Bar 1.86oz", sku: "7EL-CN-1860", category: "Snacks", price: 34.50 },
  PUSH_FIT_COUPLING: { name: "Gatorade Fruit Punch 32oz", sku: "7EL-BV-3200", category: "Beverages", price: 8.25 },

  // Energy Drinks
  ELECTRIC_WATER_HEATER: { name: "Monster Energy Drink 16oz", sku: "7EL-EB-1600", category: "Energy Drinks", price: 649.00 },
  COMMERCIAL_WATER_HEATER: { name: "Marlboro Red 20pk", sku: "7EL-TM-2000", category: "Energy Drinks", price: 2450.00 },
  TANKLESS_WATER_HEATER: { name: "Reese's PB Cups 1.5oz", sku: "7EL-CN-1500", category: "Energy Drinks", price: 1895.00 },
  GAS_WATER_HEATER_40: { name: "Doritos Nacho Cheese 9.25oz", sku: "7EL-SN-9250", category: "Energy Drinks", price: 589.00 },

  // Alcohol
  ROOFTOP_UNIT: { name: "Corona Extra 6-Pack", sku: "7EL-AL-6006", category: "Alcohol", price: 8750.00 },
  SPLIT_SYSTEM_AC: { name: "Tylenol Extra Strength 24ct", sku: "7EL-HW-2400", category: "Alcohol", price: 4200.00 },
  GAS_FURNACE: { name: "7-Select Turkey Club Sandwich", sku: "7EL-FF-5500", category: "Alcohol", price: 2150.00 },
  MINI_SPLIT: { name: "Tropicana Orange Juice 16oz", sku: "7EL-BV-1600", category: "Alcohol", price: 1650.00 },

  // Tobacco
  FIRE_SPRINKLER: { name: "Marlboro Gold 20pk", sku: "7EL-TM-2001", category: "Tobacco", price: 18.50 },
  FIRE_PIPE: { name: "Celsius Energy Drink 12oz", sku: "7EL-EB-1201", category: "Tobacco", price: 125.00 },
  BACKFLOW_PREVENTER: { name: "Kind Bar Almond Honey 1.4oz", sku: "7EL-SN-1400", category: "Distribution", price: 875.00 },

  // Fresh Food
  SINGLE_HANDLE_FAUCET: { name: "Listerine Mouthwash 8.5oz", sku: "7EL-HW-8500", category: "Fresh Food", price: 189.00 },
  TOILET_ELONGATED: { name: "Trojan Condoms 3pk", sku: "7EL-HW-0300", category: "Fresh Food", price: 349.00 },
  PRESSURE_REDUCING_VALVE: { name: "5-Hour Energy Shot 1.93oz", sku: "7EL-EB-1930", category: "Snacks", price: 67.50 },
  COMMERCIAL_SINK: { name: "Heineken Beer 22oz", sku: "7EL-AL-2200", category: "Fresh Food", price: 425.00 },

  // Lottery & Services
  PIPE_WRENCH_18: { name: "Powerball Lottery Ticket", sku: "7EL-LT-0001", category: "Lottery & Services", price: 45.00 },
  COPPER_CUTTER: { name: "Breyers Ice Cream Bar", sku: "7EL-FF-5501", category: "Lottery & Services", price: 28.50 },
} as const;

export const SEVEN_ELEVEN_FACILITIES = {
  DC_DALLAS: "7-Eleven DC Dallas",
  DC_ATLANTA: "7-Eleven DC Atlanta",
  DC_PORTLAND: "7-Eleven DC Portland",
  DC_SEATTLE: "7-Eleven DC Seattle",
  DC_CHICAGO: "7-Eleven DC Chicago",
  DC_PHOENIX: "7-Eleven DC Phoenix",
  DC_SACRAMENTO: "7-Eleven DC Sacramento",
  BRANCH_MIAMI: "7-Eleven Store Miami",
  BRANCH_DENVER: "7-Eleven Store Denver",
  BRANCH_CHARLOTTE: "7-Eleven Store Charlotte",
  BRANCH_HOUSTON: "7-Eleven Store Houston",
  BRANCH_MINNEAPOLIS: "7-Eleven Store Minneapolis",
  CENTRAL_DC: "7-Eleven DC - Irving, TX",
  REGIONAL_DC_WEST: "7-Eleven Regional DC - Phoenix, AZ",
  REGIONAL_DC_SOUTH: "7-Eleven Regional DC - Dallas, TX",
} as const;

export const SEVEN_ELEVEN_CUSTOMERS = {
  CONVENIENCE_FRANCHISEES: [
    "Circle K Franchisee Group",
    "Casey's General Stores",
    "Alimentation Couche-Tard",
    "Wawa Inc",
    "Speedway LLC",
    "Sheetz Inc",
    "QuikTrip Corporation",
    "Pilot Flying J",
  ],
  FUEL_RETAILERS: [
    "Love's Travel Stops",
    "Gate Petroleum",
    "Kwik Trip Inc",
    "Global Partners LP",
    "Sunoco LP",
    "Delek US Holdings",
  ],
  GENERAL_CONTRACTORS: [
    "EG Group",
    "TXB Stores",
    "Maverik Inc",
    "Buc-ee's Ltd",
    "Kum & Go",
  ],
  DISTRIBUTORS: [
    "NRF Distributors",
    "Core-Mark International",
    "S&P Company",
    "Nash Finch Company",
    "AWG Foods",
  ],
} as const;

export const SEVEN_ELEVEN_SUPPLIERS = {
  CHARLOTTE_PIPE: { name: "PepsiCo Inc", category: "Beverages", location: "Purchase, NY" },
  RHEEM: { name: "Coca-Cola Company", category: "Energy Drinks", location: "Atlanta, GA" },
  TRANE: { name: "Frito-Lay North America", category: "Alcohol", location: "Plano, TX" },
  WATTS_WATER: { name: "Anheuser-Busch InBev", category: "Snacks & Flow Control", location: "St. Louis, MO" },
  ELKAY: { name: "Mars Incorporated", category: "Fresh Food", location: "McLean, VA" },
  VIKING: { name: "Red Bull GmbH", category: "Tobacco", location: "Fuschl am See, Austria" },
  DELTA: { name: "Hershey Company", category: "Fresh Food", location: "Hershey, PA" },
  KOHLER: { name: "Altria Group", category: "Fresh Food", location: "Richmond, VA" },
  AO_SMITH: { name: "Mondelez International", category: "Energy Drinks", location: "Chicago, IL" },
  CARRIER: { name: "Kellogg Company", category: "Alcohol", location: "Battle Creek, MI" },
  MUELLER_WATER: { name: "Tyson Foods", category: "Distribution", location: "Springdale, AR" },
  MCWANE: { name: "McLane Company", category: "Distribution", location: "Temple, TX" },
} as const;

export const SEVEN_ELEVEN_REVENUE_CATEGORIES = {
  PLUMBING: "Beverages",
  HVAC: "Alcohol",
  WATERWORKS: "Tobacco",
  FIXTURES: "Fresh Food",
  TOOLS: "Lottery & Services",
} as const;

// Product mapping from old names to new 7-Eleven Products
export const PRODUCT_MAPPING: Record<string, typeof SEVEN_ELEVEN_PRODUCTS[keyof typeof SEVEN_ELEVEN_PRODUCTS]> = {
  "FROSTY MIX VANILLA CLEAN LABEL": SEVEN_ELEVEN_PRODUCTS.COPPER_COUPLING,
  "FROSTY MIX CHOCOLATE CLEAN LABEL": SEVEN_ELEVEN_PRODUCTS.ELECTRIC_WATER_HEATER,
  "SAUCE MINT CHOCOLATE COOKIE": SEVEN_ELEVEN_PRODUCTS.PEX_TUBING,
  "Marble Mosaic": SEVEN_ELEVEN_PRODUCTS.PVC_DWV_FITTING,
  "Ceramic White": SEVEN_ELEVEN_PRODUCTS.COMMERCIAL_WATER_HEATER,
  "Porcelain Stone": SEVEN_ELEVEN_PRODUCTS.DUCTILE_IRON_PIPE,
  "Granite Pearl": SEVEN_ELEVEN_PRODUCTS.ROOFTOP_UNIT,
  "Slate Grey": SEVEN_ELEVEN_PRODUCTS.FIRE_SPRINKLER,
  "Travertine Beige": SEVEN_ELEVEN_PRODUCTS.SINGLE_HANDLE_FAUCET,
  "Quartzite Gold": SEVEN_ELEVEN_PRODUCTS.PRESSURE_REDUCING_VALVE,
  "Onyx Black": SEVEN_ELEVEN_PRODUCTS.BACKFLOW_PREVENTER,
  "Limestone Cream": SEVEN_ELEVEN_PRODUCTS.SPLIT_SYSTEM_AC,
  "Sandstone Tan": SEVEN_ELEVEN_PRODUCTS.GAS_FURNACE,
  "Basalt Dark": SEVEN_ELEVEN_PRODUCTS.BRASS_BALL_VALVE,
  "Terrazzo Mix": SEVEN_ELEVEN_PRODUCTS.COPPER_PIPE_TYPE_L,
};
