export interface City {
  location: string;
  city: string;
  country: string;
  coordinates: { latitude: number; longitude: number };
  measurements: [
    {
      lastUpdated: string;
      parameter: string;
      sourceName: string;
      unit: string;
      value: number;
    }
  ];
}
