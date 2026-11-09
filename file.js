function diaDeLaSemana(fecha) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    throw new Error("Usa el formato de fecha YYYY-MM-DD.");
  }

  const fechaUTC = new Date(`${fecha}T00:00:00Z`);
  if (Number.isNaN(fechaUTC.getTime()) || fechaUTC.toISOString().slice(0, 10) !== fecha) {
    throw new Error("La fecha no es válida.");
  }

  return new Intl.DateTimeFormat("es", {
    weekday: "long",
    timeZone: "UTC",
  }).format(fechaUTC);
}

console.log(diaDeLaSemana("2026-11-07")); // sábado
