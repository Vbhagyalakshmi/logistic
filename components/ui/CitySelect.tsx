import { siteConfig } from "@/lib/site-config";

type CitySelectProps = {
  name: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  className?: string;
};

export function CitySelect({
  name,
  defaultValue = "",
  value,
  onChange,
  required = true,
  className = "chowra-input",
}: CitySelectProps) {
  const controlled = value !== undefined;
  return (
    <select
      name={name}
      required={required}
      defaultValue={controlled ? undefined : defaultValue}
      value={controlled ? value : undefined}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className={className}
    >
      <option value="">Select a city</option>
      <optgroup label="Andhra Pradesh">
        {siteConfig.cityOptions.andhraPradesh.map((city) => (
          <option key={`ap-${city}`} value={city}>{city}</option>
        ))}
      </optgroup>
      <optgroup label="Other Indian Cities">
        {siteConfig.cityOptions.india
          .filter((city) => !siteConfig.cityOptions.andhraPradesh.includes(city))
          .map((city) => (
            <option key={`in-${city}`} value={city}>{city}</option>
          ))}
      </optgroup>
    </select>
  );
}
