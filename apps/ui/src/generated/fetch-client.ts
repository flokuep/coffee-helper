/**
 * Coffee helper
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type CreateExtractionDto = {
    "in"?: number;
    "out"?: number;
    time?: number;
    grind?: number;
    profile?: string;
    flow?: string;
    nextExtractionHint?: string;
    barista?: string;
};
export type Extraction = {
    id: number;
    "in"?: number;
    "out"?: number;
    grind?: number;
    time?: number;
    profile?: string;
    flow?: string;
    nextExtractionHint?: string;
    barista?: string;
    createdAt: string;
};
export type UpdateExtractionDto = {
    "in"?: number;
    "out"?: number;
    time?: number;
    grind?: number;
    profile?: string;
    flow?: string;
    nextExtractionHint?: string;
    barista?: string;
};
export type CreateBeanDto = {
    name: string;
    manufacturer: string;
    profile?: string;
    notes?: string;
};
export type Bean = {
    id: number;
    name: string;
    manufacturer: string;
    profile?: string;
    notes?: string;
    extractions: Extraction[];
    createdAt: string;
    updatedAt: string;
};
export type UpdateBeanDto = {};
export type UpdateBeanResponseDto = {};
export type CreateGroupDto = {
    name: string;
    token: string;
};
export type Group = {
    id: number;
    name: string;
    token: string;
    createdAt: string;
    updatedAt: string;
};
export type UpdateGroupDto = {};
export function appControllerLogin(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchText("/auth/login", {
        ...opts,
        method: "POST"
    }));
}
export function appControllerLogout(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 201;
        data: object;
    }>("/auth/logout", {
        ...opts,
        method: "POST"
    }));
}
export function extractionControllerCreate({ beanId, createExtractionDto }: {
    beanId: number;
    createExtractionDto: CreateExtractionDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 201;
        data: Extraction;
    }>(`/api/extraction/${encodeURIComponent(beanId)}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: createExtractionDto
    })));
}
export function extractionControllerFindAllForBean({ beanId }: {
    beanId: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Extraction[];
    }>(`/api/extraction/for-bean/${encodeURIComponent(beanId)}`, {
        ...opts
    }));
}
export function extractionControllerFindOne({ id }: {
    id: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Extraction;
    }>(`/api/extraction/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function extractionControllerUpdate({ id, updateExtractionDto }: {
    id: number;
    updateExtractionDto: UpdateExtractionDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Extraction;
    }>(`/api/extraction/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateExtractionDto
    })));
}
export function extractionControllerRemove({ id }: {
    id: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/extraction/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function beanControllerCreate({ createBeanDto }: {
    createBeanDto: CreateBeanDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 201;
        data: Bean;
    }>("/api/bean", oazapfts.json({
        ...opts,
        method: "POST",
        body: createBeanDto
    })));
}
export function beanControllerFindAll(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Bean[];
    }>("/api/bean", {
        ...opts
    }));
}
export function beanControllerFindOne({ id }: {
    id: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Bean;
    }>(`/api/bean/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function beanControllerUpdate({ id, updateBeanDto }: {
    id: number;
    updateBeanDto: UpdateBeanDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: UpdateBeanResponseDto;
    }>(`/api/bean/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateBeanDto
    })));
}
export function beanControllerRemove({ id }: {
    id: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/bean/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function groupControllerCreate({ createGroupDto }: {
    createGroupDto: CreateGroupDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 201;
        data: Group;
    }>("/api/group", oazapfts.json({
        ...opts,
        method: "POST",
        body: createGroupDto
    })));
}
export function groupControllerFindOne({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Group;
    }>(`/api/group/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function groupControllerUpdate({ id, updateGroupDto }: {
    id: string;
    updateGroupDto: UpdateGroupDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: Group;
    }>(`/api/group/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateGroupDto
    })));
}
export function groupControllerRemove({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/group/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
