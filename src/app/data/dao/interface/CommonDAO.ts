import {Observable} from "rxjs";

export interface CommonDAO<T> {

  add(T): Observable<T>;
  // получить одно значение по id
  get(id: number): Observable<T>;
  // удалить значение
  delete(id: number): Observable<T>;
  // обновить значение
  update(T): Observable<T>;
  // получить все значения
  getAll(): Observable<T[]>
}
